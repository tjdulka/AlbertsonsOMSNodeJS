
exports.home = function(ibmdb, dbConnection) {
	var page = '<!DOCTYPE html><html><body><title>Alberstons OMS API</title>'; 
	page += '<img src="static/images/Albertsons.png"><br>';
	page += '<table><tr><td colspan="3"><h1>Albertsons OMS API</h1></td></tr>';
	page += '<tr><td><b>Usage:</b></td><td>/orders</td><td>Returns all orders</td></tr>';
	page += '<tr><td></td><td>/orders_by_product/<product></td><td>Return all items from recent orders that have the specified product</td></tr>';
	page += '<tr><td></td><td>/orders_by_store/<facility_id></td><td>Returns all orders for the specified facility_id</td></tr>';
	page += '<tr><td></td><td>/orders_by_user/<user_id></td><td>Returns all orders for the specified user_id</td></tr>';
	page += '<tr><td></td><td>/order_status/<order_nbr</td><td>Returns status for the specified order</td></tr>';
	page += '<tr><td></td><td>/order_detail/<order_nbr></td><td>Returns detail line items for the specified order</td></tr></table>';
	page += '</body></html>';
	return page;
}

exports.orders = function(ibmdb, dbConnection) {
	return function(req, res) {
		ibmdb.open(dbConnection, function(err, conn) {
			if (err) {
				res.send("error occurred " + err.message);
			} else {
				conn.query(
						'select DEST_FACILITY_ID, ORDER_NBR, ORDER_DT, SHIP_FACILITY_ID from DASH101788.ALBERTSONS_ORDER_HEADERS',
						function(err, data) {
							if (!err) {
								conn.close(function(err) {
									if (!err) {
									}
								});
								res.send(data);
							} else {
								res.send("ERROR:" + err);
							}
						});
			}
		});
	}
}