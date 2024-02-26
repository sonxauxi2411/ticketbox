function formatCurrencyVND(amount) {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      currencyDisplay: 'code',
      minimumFractionDigits: 0,
    });
    
    return formatter.format(amount);
  }
  
export {formatCurrencyVND}