{
    /* 
        Enum
    */
   const MAX_NUM = 6;
   const DAYS_ENUM = Object.freeze({"MONDAY" : 0 , "TUESDAY" : 1 , "WENDSDAY" : 2});
   const dayOfToday = DAYS_ENUM.MONDAY;

   // TypeScript
   // Enum 타입이 정확하게 보장되지 않아서 권장X
   // Union 타입으로 대체 되어서 사용할 수 있다.(대부분)
   // 모바일의 경우 JSON 타입으로 data를 보내고 받아올 때 Union 타입 지정 X => Enum을 사용함
    type DayofWeek = 'Monday' | 'Tuesday' | 'Wednesday'

   enum Days {
    Monday,
    Tuesday,
    Wendsday,
    Thursday,
    Friday,
    Saturday,
    Sunday
   }
   console.log(Days.Monday);
   console.log(Days.Thursday);
   let day : Days = Days.Saturday;
   day = Days.Saturday;
   day = 5;
   console.log("day", day)
   let dayOfweek : DayofWeek = 'Monday'
   dayOfweek = 'Tuesday';

}