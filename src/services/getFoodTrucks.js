async function getFoodTrucks() {
  try {
    const response = await fetch(
      'https://data.sfgov.org/api/id/rqzj-sfat.json?facilitytype=Truck'
    );
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error();
  }
}

export { getFoodTrucks };
