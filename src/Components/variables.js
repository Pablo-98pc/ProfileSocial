export const user = {
    pic: undefined,
    name: "Linda Williams", 
    username:"llwil",
    email: "linda.w@webbs.com",
    phone:"+1-555-245-2013",
    devices: "Mobile",
    location: "San Francisco, USA",
    social: "Facebook",
    spent: "$2,500",
    studentID:"",
    password:"",
    gender:"",
    language:"",
    privacy:"",
    globalNot:""
}
export const firstblock = {
titleContainer:'Basic Information',
items : [
{title:"Full Name",value:`${user.name}`, isEditable: true, isNowEditable: true},
{title:"Email Address",value:`${user.email}`, isEditable: true, isNowEditable: true},
{title: "Student ID", value :"Add Student ID", isEditable: true, isNowEditable: true},
{title:"Password", value:"Change Password", isEditable:true}
]
}
export const secondBlock = {
titleContainer : 'System Settings',
items : [
{title: "Language", value :`${user.language}`},
{title:"Privacy settings", value:`${user.privacy}`},
{title:"Global Notification Settings", value:"Stream Notifications"}
]
}
export const thirdBlock = {
titleContainer : 'Additional Information',
items : [
{title:"Gender", value:"Add gender",isEditable:true}
]
}
