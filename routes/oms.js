
exports.home = function(ibmdb, dbConnection) {
	return function(req, res) {
		ibmdb.open(dbConnection, function(err, conn) {
			if (err) {
				res.send("error occurred " + err.message);
			} else {
				conn.query(
						'SELECT id,lastname,name,country,city FROM t_person',
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

exports.orders = function(ibmdb, dbConnection) {
	return function(req, res) {
		ibmdb.open(dbConnection, function(err, conn) {
			if (err) {
				res.send("error occurred " + err.message);
			} else {
				conn.query(
						'SELECT id,lastname,name,country,city FROM t_person',
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