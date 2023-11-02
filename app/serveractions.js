"use server"

import prisma from "./db";

//add new user to the DB for create account
async function addUserToDB(username, named, DOB, race, ethnicity, gender, sexuality, photourl, address){
    await prisma.user.create({
        data: {
            username: username,
            name: named,
            DOB: DOB,
            race: race,
            ethnicity: ethnicity,
            gender: gender,
            sexuality: sexuality,
            photourl: photourl,
            address: address
        }
    });
}


// edit profile

async function editProfile(username, named, gender, sexuality, photourl, address){
    await prisma.user.update({
        where: {
            username: username
        },
        data:{
            name: named,
            gender: gender,
            sexuality: sexuality,
            photourl: photourl,
            address: address
        }
    })
}

//get individual profile
async function individual(username, named, DOB, race, ethnicity, gender, sexuality, photourl, address) {
    
}
//get all reviews

//get individual review

//add a review

export {addUserToDB, editProfile};