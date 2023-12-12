

  export const formattedPrice =(price:number)=>{
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  }

  export const formatNumberWithSuffix = (number:number) =>{
    if (number < 1e6) {
      return "$"+number.toFixed(2);
    } else if (number < 1e9) {
      return "$"+(number / 1e6).toFixed(2) + 'M';
    } else {
      return "$" + (number / 1e9).toFixed(2) + "B";
    }
  }