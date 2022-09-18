export const Arrow = () => {
   return (
      <div className="absolute w-12 left-10 bottom-0 animate-bounce select-none
         before:absolute
         before:content-['']
         before:w-12
         before:h-2
         before:bg-secundary
         before:rotate-30
         before:-left-8 
         before:rounded-sm

         after:absolute
         after:content-['']
         after:w-12
         after:h-2
         after:bg-secundary
         after:-rotate-30
         after:rigth-8
         after:rounded-sm


      ">
         &nbsp;
      </div>
   )
}