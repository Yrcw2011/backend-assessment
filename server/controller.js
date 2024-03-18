module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar"];
    }   
    getPhoneNum: (req, res) => {
        const phoneNum = ["555-5555"];
        
    }

    getVoiceMail: (req, res) => {
        const VoiceMail = ["Please leave return Number here"];

    getEmail: (req, res) => {
        const Email = ["Add Email here"]
    }
        
    }

        
 // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.phoneNum.VoiceMail.Email.length)

        
        
        let randomCompliment = compliments[randomIndex]
        let randomPhoneNum = phoneNum[randomIndex]
        let randomVoiceMail = VoiceMail[randomIndex]
        let randomEmail = Email[randomEmail]
        
        res.status(200).send(randomCompliment)
    

}