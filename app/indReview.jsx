import Link from "next/link";
import Rating from '@mui/material/Rating';

function Review({review}){

  return(
      <div className="m-8 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-amber-400 dark:bg-indigo-900 hover:bg-indigo-500 hover:text-stone-800">
        
          <image
            className="rounded-t-lg"
            src={review.photosurl}
            alt="location review photos" />
        
        <div class=" m-8 p-6 items-center justify-center">
          <h5 className="mb-2 text-3xl font-medium leading-tight">
            {review.location}
          </h5>

          <h5 className="mb-2 text-2xl font-medium leading-tight">
            {review.createdat.toDateString()}
          </h5>

          

          <Rating  value={review.rating} readOnly/>

          <Link href={`/indreview?id=${review.id}`} ><button className="underline text-base"> SEE MORE </button></Link>

        </div>

      </div>

    )
}

export default Review