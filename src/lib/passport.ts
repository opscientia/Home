import passport from "passport";
import OrcidStrategy from 'passport-orcid'
import User from "../models/Users";
import jwt from "jsonwebtoken";
import refresh from 'passport-oauth2-refresh';



const Strategy = new OrcidStrategy(
  {
    sandbox: true, // remove this to use the production API
    state: false, // remove this if not using sessions
    clientID: process.env.ORCID_CLIENT_ID,
    clientSecret: process.env.ORCID_CLIENT_SECRET,
    callbackURL: '/api/orcid/callback'
  },
  async (accessToken, refreshToken,params, profile, done) => {
    try {
      profile = { orcid: params.orcid, name: params.name }

      const obj = await User.findOne({ orcid: profile.orcid });
      if (!obj) {
        // create new user
        const newUser = new User({
          orcid: profile.orcid,
          username: profile.name,
          accessToken,
          refreshToken,
          date_joined: Date.now()
        });
        await newUser.save();
        const token = await jwt.sign(
          {
            id: newUser._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        newUser.tokens.push(token);
        await newUser.save();
        console.log("new user" + newUser);
        done(null, newUser, { message: "Auth successful", token });
      } else {
        // login existing user
        // TODO renew accesstoken using refresh token after 60days
        console.log("existing user" + obj);

        const token = await jwt.sign(
          {
            id: obj._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        obj.tokens.pop();
        console.log("popped")
        obj.tokens.push(token);
        await obj.save();
        done(null, obj, { message: "Auth successful", token });
      }
    } catch (err) {
      console.error(err);
      done(err, false, { message: "Internal server error" });
    }
  }
);

passport.use(
  "orcid",
  Strategy
);
refresh.use(Strategy);
