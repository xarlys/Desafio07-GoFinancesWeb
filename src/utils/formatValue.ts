const formatValue = (value: number): string =>
  Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;

// new Date(transaction.created_at).toLocaleDateString('pt-br',),
