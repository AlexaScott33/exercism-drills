class Year {
  isLeap(year) {
      if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
          return true;
      }
  }
}


export default Year;
