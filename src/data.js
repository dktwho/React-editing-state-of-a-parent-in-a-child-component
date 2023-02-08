import { nanoid } from 'nanoid'

function id() {
  return nanoid()
}

const initProds = [
	{id: id(), name: 'product1', cost: 100, isEdit: false},
	{id: id(), name: 'product2', cost: 200, isEdit: false},
	{id: id(), name: 'product3', cost: 300, isEdit: false},
];

const initUsers = [
	{id: id(), name: 'Bill', spec: 'js', isOnline: false, isEdit: false},
	{id: id(), name: 'Tedd', spec: 'java', isOnline: false, isEdit: false},
	{id: id(), name: 'John', spec: 'python', isOnline: false, isEdit: false},
];


export {
  id, initProds, initUsers
}
