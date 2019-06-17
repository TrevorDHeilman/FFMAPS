package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Stock;

public interface StockDAO {
	public void addStock(Stock stock);
	public List<Stock> getStock();
	public void updateStock(Stock stock);
}
