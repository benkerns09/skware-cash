function renderTransactions(transactions) {
	var finalHTML = '<div class="buffer">TRANSACTIONS</div>';

	var transactionsHTML = _.map(transactions, function(transaction) {
		var transactionHTML = '<div class="transaction">';
		transactionHTML += '<div class="name">'   + transaction.name   + '</div>';
		transactionHTML += '<div class="for">' 	  + transaction.for    + '</div>';
		transactionHTML += '<div class="date">'   + transaction.date   + '</div>';
		transactionHTML += '<div class="amount">' + transaction.amount + '</div>';
		transactionHTML += '</div>';

		return transactionHTML;
	});

	finalHTML += transactionsHTML.join('');

	return finalHTML;
}

$(document).ready(function(){
	$('.transactions').html(renderTransactions(fullTransactionData));
	
	$('.search-input').on('input', function(e) {
		var searchString = e.target.value.toLowerCase();//makes it so that the transaction filtering is not case sensitive
		var filteredData = _.filter(fullTransactionData, function(transaction){
			var foundInName    = transaction.name.toLowerCase().indexOf(searchString) > -1;//tolowercase method
			var foundInFor     = transaction.for.toLowerCase().indexOf(searchString) > -1;//tolowercase method
			var foundInDate    = transaction.date.toLowerCase().indexOf(searchString) > -1;//tolowercase method
			var foundInAmount  = transaction.amount.toLowerCase().indexOf(searchString) > -1;//tolowercase method
			return foundInName || foundInFor || foundInDate || foundInAmount;
		});

		$('.transactions').html(renderTransactions(filteredData));
	});

});