package com.fairfellas.data;

import java.util.Set;

import com.fairfellas.beans.Stock;

public interface StockDAO {
	public void addStock(Stock stock);
	public Set<Stock> getStock();
}
