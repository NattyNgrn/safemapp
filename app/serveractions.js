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
async function getIndividual(id) {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            username: true,
            name: true,
            DOB: true,
            race: true,
            ethnicity: true,
            gender: true,
            sexuality: true,
            photourl: true,
            address: true,
        }
    })
    return user;
}
//get all reviews

//get individual review

//add a review
async function addReviewToDB(review){
    await prisma.reviews.create({
        data: {
            rating: review.rating, 
            location: review.location,  
            userid: 1, 
            photourl: review.photourl,
            notes: review.notes
        }
    });
}

export {addUserToDB, editProfile, getIndividual, addReviewToDB};