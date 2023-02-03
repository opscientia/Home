const sendInBlueKey = process.env.NEXT_PUBLIC_SEND_IN_BLUE_KEY

export default async function handler(req, res) {

    const body = req.body

    const resp = await fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': sendInBlueKey
        },
        body: JSON.stringify({
            "sender":{  
                "name": body.name,
                "email": body.email
             },
             "to":[  
                {  
                   "email": "myemail@ppolivka.com",
                   "name": "Pavel Polivka"
                }
             ],
             "subject":`Contact Form Eamil From ${body.name}`,
             "htmlContent":`
                <html>
                    <head></head>
                    <body>
                        From: ${body.name} <br/>
                        Message: ${body.message} <br/>
                    </body>
                </html>
            `
        })
    });

    res.status(200).end()
}