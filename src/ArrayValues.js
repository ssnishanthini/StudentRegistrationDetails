let mystudents=[
    {
        "stuName":"Nisha",
        "stuDob":"31.12.2002",
        "stuAdd":"salem",
        "stuMail":"nisha2002@gmail.com",
        "stuMob":"9354876468",
        "stuCourse":"Java Full Stack",
        "stuPayment":"cash",
        "stuSkills":["Tamil","English","Malayalam"]
    },
    {
        "stuName":"Siva",
        "stuDob":"17.01.1998",
        "stuAdd":"chennai",
        "stuMail":"siva1998@gmail.com",
        "stuMob":"9579288268",
        "stuCourse":"pHP Full Stack",
        "stuPayment":"cheque",
        "stuSkills":["Tamil","English"]
    },
    {
        "stuName":"Sathya",
        "stuDob":"25.06.2001",
        "stuAdd":"coimbatore",
        "stuMail":"sathyasiva2001@gmail.com",
        "stuMob":"9248617581",
        "stuCourse":"R-programming Full Stack",
        "stuPayment":"cash",
        "stuSkills":["Tamil","Malayalam"]
    }
]

export const list=()=>
{
    return mystudents
}
export const create=(obj)=>
{
    mystudents.push(obj)
}

