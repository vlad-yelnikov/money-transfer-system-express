# money-counting-system

# Users
**GET** /api/users/search?name={name}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount}

**POST** /api/users - create user

**GET** /api/users/{userId} - return some user

**PUT** /api/users/{userId} - update user object

**DELETE** /api/users/{userId} - delete user

------------------------

# Cards
**GET** /api/cards/search?debitfrom={from}&debitto={to}&creditfrom={from}&creditto={to}&creditlimitfrom={from}&creditlimitto={to}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount} - return list of cards

**POST** /api/cards - create card
body:
	`{
		user: User.id
	}`

**GET** /api/cards/{cardId} - return some card

**DELETE** /api/cards/{cardId} - delete card

**PUT** /api/cards/increase/{cardId} 
**PUT** /api/cards/decrease/{cardId}
	body 
	`{   
		amount: 100,	
	}`
	
**PUT** /api/cards/creditLimit/{cardId}
body 
	`{   
		amount: 100,
	}` 


# Transactions


**GET** api/transactions/search?q={queryString}&category={category}&datefrom={from}&dateto={to}&amountfrom={amount}&amountto={amount}&type={type}&card={cardId}&description={desc}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount}- filter 


**GET** api/transactions/{transactionId}

**POST** api/transactions
body:
`{
	sender: Card.id,
	reciever: Card.id,
	amount: Number,
	description: String,
	category: String
}`

**POST** api/transactions/rollback/{transactionId}


