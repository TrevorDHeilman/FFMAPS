package com.fairfellas.data;

import com.fairfellas.beans.Stock;

public interface StockDAO {
	public void addStock(Stock stock);
	public Stock getStock(Integer id);
}
