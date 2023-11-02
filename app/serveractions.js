"use server"

async function AddusertoDB(username, name, DOB, race, ethnicity, gender, sexuality, photourl)
const user = await prisma.user.create({
    data: {
        username: username,
        name: name,
        DOB: DOB,
        race: race,
        ethnicity: ethnicity,
        gender: gender,
        sexuality: sexuality,
        photourl: photourl
        
    }
})

export default {AddusertoDB};