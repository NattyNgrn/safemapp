"use server"

import prisma from "./db";

//add new user to the DB for create account
async function addUserToDB(clerkid, username, named, DOB, race, ethnicity, gender, sexuality, photourl, address){
    await prisma.user.create({
        data: {
            clerkid: clerkid,
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

async function editProfile(clerkid, username, named, gender, sexuality, photourl, address){
    await prisma.user.update({
        where: {
            clerkid: clerkid
        },
        data:{
            username: username,
            name: named,
            gender: gender,
            sexuality: sexuality,
            photourl: photourl,
            address: address
        }
    })
}

//get individual profile
async function getIndividual(clerkid) {
    const user = await prisma.user.findUnique({
        where: {
            clerkid: clerkid
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

async function getAllReviews(location) {
    const reviews = await prisma.reviews.findMany({
        where: {
            location: location
        },
        select: {
            clerkid: true,
            id: true,
            rating: true,
            createdat: true,
            location: true,
            photosurl: true,
            notes: true
        }
    })
    return reviews;
}

//get individual review

async function getIndividualReview(id) {
    const review = await prisma.reviews.findUnique({
        where: {
            id: id
        },
        select: {
            clerkid: true,
            rating: true,
            createdat: true,
            location: true,
            photosurl: true,
            notes: true
        }
    })
    return user;
}

//add a review
async function addReviewToDB(review){
    await prisma.reviews.create({
        data: {
            rating: review.rating, 
            location: review.location,  
            clerkid: review.clerkid,
            photourl: review.photourl,
            notes: review.notes
        }
    });
}


export {addUserToDB, editProfile, getIndividual, addReviewToDB, getAllReviews, getIndividualReview};