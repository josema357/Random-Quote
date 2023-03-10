import React from 'react'
import { fetchData } from '../data/data'

const BoxQuote = (props) => {
  const colors=["22 160 133","39 174 96","44 62 80","243 156 18","231 76 60","155 89 182","251 105 100","52 34 36","71 46 50","189 187 153","119 177 169","115 168 87"];
  let copyColors=colors;
  let color;
  const newQuoteFunc=()=>{
    props.dispa(fetchData())
    let numcolor=copyColors[Math.floor(Math.random()*copyColors.length)];
    copyColors=copyColors.filter((elem)=>elem!==numcolor)
    if(copyColors.length==0){
        copyColors=colors;
    }
    color=numcolor;
    document.documentElement.style.setProperty('--color-page',color);
  }
  return (
    <>
    <div id='quote-box' className='bg-white text-page font-medium w-[90%] max-w-[550px] flex flex-col justify-center content-center px-[10px] py-[20px] min-[500px]:px-[30px] min-[500px]:py-[20px] gap-[15px] rounded-md'>
        <div id='quote-prub' className={props.initState.quote.data===null ? "quote-text text-center h-fit max-h-[400px] overflow-y-scroll" : (props.initState.quote.isLoading) ? "quote-text text-center opacity-0 h-fit max-h-[400px] overflow-y-scroll" : "quote-text text-center opacity-100 h-fit max-h-[400px] overflow-y-scroll"}>
            <span id='text' className='text-center inline-block min-[500px]:text-2xl break-words'>
                <i className='mr-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="quotation bi bi-quote fill-page inline-block min-[500px]:w-[35px] min-[500px]:h-[35px]" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg></i>
                <span className=''>{props.initState.quote.data!=null ? props.initState.quote.data.quote : null}</span>
            </span>
        </div>
        <div className='quote-author flex justify-end'>
            <span id='author' className={props.initState.quote.data===null ? 'capitalize font-normal min-[500px]:text-lg truncate' : (props.initState.quote.isLoading) ? "capitalize font-normal min-[500px]:text-lg truncate opacity-0" : "capitalize font-normal min-[500px]:text-lg truncate opacity-100"}>{props.initState.quote.data!=null ? `- ${props.initState.quote.data.author}` : null}</span>
        </div>
        <div className='buttons flex justify-between mt-[10px] max-[300px]:flex-col gap-[10px]'>
            <div className='flex w-[90px] justify-between max-[300px]:justify-center max-[300px]:w-full gap-[10px]'>
                <a id='tweet-quote' className='p-[10px] bg-page rounded-md red-quote' href={props.initState.quote.data===null ? "https://twitter.com/intent/tweet?hashtags=quotes&text=" : (props.initState.quote.isLoading) ? "https://twitter.com/intent/tweet?hashtags=quotes&text=" : `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent('"'+props.initState.quote.data.quote+'" '+props.initState.quote.data.author)}`} target='_blank' rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='white' className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </a>
                <a className='p-[10px] bg-page rounded-md red-quote' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffacebook.com%2F&amp;src=sdkpreparse' target='_blank' rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='white' className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                </a>
            </div>
            <button onClick={newQuoteFunc} id='new-quote' className='w-[120px] bg-page text-white rounded-md outline-0 text-[14px] max-[300px]:order-first h-[40px] max-[300px]:w-full'>New Quote</button>
        </div>
    </div>
    <div className='footer text-slate mt-[15px] text-[15px] box-border'>by <a className='text-white' href="https://www.linkedin.com/in/josema317" target='_blank'>josema</a></div>
    </>
  )
}

export default BoxQuote