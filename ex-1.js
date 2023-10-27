class EmailNotification { 
    constructor(notificationID, createdTime, content, receiver){
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class SMSNotification {
    constructor(notificationID, createdTime, content, phoneNumber){
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
 }

 const emailNotification = new EmailNotification('1','2023-10-27 10:00 AM', 'Hello, this is an email notification!', 'example@example.com');
 emailNotification.send();

 const smsNotifcation = new SMSNotification('2', '2023-10-27 11:00 AM', 'Hello, this is an SMS notification!', '+1234567890');
 smsNotifcation.send();
