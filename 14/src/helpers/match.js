export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}

// recursively calling matchPeople could lead to performance issues for large lists
// instead we could also swap the receiver from the last successfully assigned pair
// with the receiver which would be the same as the giver in case giver and receiver
// at the end are the same
export const matchPeople = people => {
  // Return an array of randomly matched up people.
  // The array should have objects with the following structure:
  // { giver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}, receiver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}}

  // Rules:
  // 1. For every person there has to be a giver
  // 2. A person cannot be their own giver

  let availableReceiver = [...people];

  const secretSantaList = [];

  for(const person of people) {
    const giver = person;
    const possibleReceivers = availableReceiver.filter(receiver => receiver.email !== giver.email);
    if(possibleReceivers.length === 0) {
      return matchPeople(people);
    }
    const receiver = possibleReceivers[Math.floor(Math.random() * possibleReceivers.length)];
    // availableReceiver.splice(availableReceiver.findIndex(aR => aR.email === receiver.email), 1);
    availableReceiver = availableReceiver.filter(aR => aR.email !== receiver.email);
    secretSantaList.push({ giver, receiver });
  }

  return secretSantaList;
}
