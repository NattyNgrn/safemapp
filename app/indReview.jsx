import Link from "next/link";

function Review({review}){

  return(
      <div className="m-8 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-emerald-900 hover:bg-emerald-200">
        
          <image
            className="rounded-t-lg"
            src={review.photosurl}
            alt="location review photos" />
        
        <div class=" m-8 p-6 items-center justify-center">
          <h5 className="mb-2 text-3xl font-medium leading-tight">
            {review.location}
          </h5>

          <h5 className="mb-2 text-2xl font-medium leading-tight dark:text-stone-800">
            {review.createdat.toDateString()}
          </h5>

          <h5 className="mb-2 text-3xl font-medium leading-tight dark:text-stone-800">
            {review.rating}
          </h5>

          <Link href="/indreview" ><button> SEE MORE </button></Link>

        </div>

      </div>

    )
}

export default Review