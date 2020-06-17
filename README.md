# money-counting-system

# Users
Get /api/users/search?name={name}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount}

Post /api/users - create user

Get /api/users/{userId} - return some user

Put /api/users/{userId} - update user object

Delete /api/users/{userId} - delete user

------------------------

# Cards
Get /api/cards/search?debitfrom={from}&debitto={to}&creditfrom={from}&creditto={to}&creditlimitfrom={from}&creditlimitto={to}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount} - return list of cards

Post /api/cards - create card
body:
`{
	user: User.id,
}`

Get /api/cards/{cardId} - return some card

Delete /api/cards/{cardId} - delete card

Put /api/cards/increase/{cardId} // 
Put /api/cards/decrease/{cardId}
	body 
	`{   
		amount: 100,
		
	}`
	
Put /api/cards/creditLimit/{cardId}
body 
	`{   
		amount: 100,
		
	}`

------------------------- add Put / create actions

# Transactions


Get api/transactions/search?q={queryString}&category={category}&datefrom={from}&dateto={to}&amountfrom={amount}&amountto={amount}&type={type}&card={cardId}&description={desc}&sort={field}&order={asc/desc}&page={pageNumber}&size={pageAmount}- filter 


Get api/transactions/{transactionId}

Post api/transactions
body:
`{
	sender: Card.id,
	reciever: Card.id,
	amount: Number,
	description: String,
	category: String

}`

Post api/transactions/rollback/{transactionId}


