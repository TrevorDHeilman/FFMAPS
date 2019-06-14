package com.fairfellas.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name = "receipt")
public class Purchase {
	@Id
	@Column(name = "receiptId")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="receipt")
	@SequenceGenerator(name="receipt", sequenceName="receipt_seq", allocationSize=1)
	private Integer id;
	@Column(name = "NumberofTickets")
	private int numberOfTickets;
	
	@Override	
	public String toString() {
		return "Purchase [numberOfTickets=" + numberOfTickets + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + numberOfTickets;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Purchase other = (Purchase) obj;
		if (numberOfTickets != other.numberOfTickets)
			return false;
		return true;
	}


	
	public Purchase() {
		super();
	}
	
	public Purchase(Integer numberOfTickets) {
		this.numberOfTickets = numberOfTickets;;
	}
	
	public int getNumberOfTickets() {
		return this.numberOfTickets;
	}
}
