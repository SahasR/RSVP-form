export default function validateInfo(values) {
    let errors = {}
     
    //Student ID
    if(!values.studid.trim()) {
        errors.studid = "StudentID is required"
    } else if(values.studid.length !== 10) {
        errors.studid = "StudentID is wrong"
    } else if (!/^(IT|it|BM|bm|EN|en)([0-9]{8})$/.test(values.studid.trim())) {
        errors.studid = "StudentID is in invalid format"
    }

    //Email
    if(!values.studemail) {
        errors.studemail = "Email required"
    } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.studemail)) {
        errors.studemail = "Email address is invalid"
    }

    //Name
    if(!values.stud.trim()) {
        errors.stud = "Student Name is required"
    }   
    
    //Number
    if(!values.studcontact.trim()) {
        errors.studcontact = "Student Phone number is required"
    } else if (values.studcontact.trim().length !== 10) {
        errors.studcontact = "Phone number should be 10 digits"
    } else if (!/^([0])([0-9]){9}$/.test(values.studcontact.trim())) {
        errors.studcontact = "Phone number is invalid"
    };

}