package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Receipt;

public interface ReceiptDAO {

	public List<Receipt> getReceipt(String email);

}
