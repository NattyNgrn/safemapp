
function Review({review}){
  
  return(
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
          <image
            class="rounded-t-lg"
            src={review.photosurl}
            alt="location review photos" />
        
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {review.location}
          </h5>

          <h5>
            {review.rating}
          </h5>
        </div>

      </div>

    )
}

export default Review