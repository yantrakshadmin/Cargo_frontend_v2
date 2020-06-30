export const GetTruckType = (i) => {
  switch (i) {
    case 1:
      return 'Transporter';
    case 2:
      return 'Broker';
    case 3:
      return 'Fleet Owner';
    default:
      return null;
  }
};
