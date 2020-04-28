const formatDate = (date: Date): string => {
  return Intl.DateTimeFormat('br-BR').format(new Date(date));
};

export default formatDate;
