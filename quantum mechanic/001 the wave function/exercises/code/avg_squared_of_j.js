function avg_squared_of_j(data, N)
{
	var avg = 0;
	for (var j = 0; j < data.length; j += 2)
    {
		avg += (data[j]*data[j]) * (data[j+1]/N);
    }
	return avg;
}

function avg_of_j(data, N)
{
	var avg = 0;
	for (var j = 0; j < data.length; j += 2)
    {
		avg += (data[j]) * (data[j+1]/N);
    }
	return avg;
}

// examples:
// usage: avg_squared_of_j([j1, j1count, j2, j2count...], N=sampleQuantity);
avg_squared_of_j([14, 1, 15, 1, 16, 3, 22, 2, 24, 2, 25, 5], 14);

// usage: avg_of_j([j1, j1count, j2, j2count...], N=sampleQuantity);

avg_of_j([14, 1, 15, 1, 16, 3, 22, 2, 24, 2, 25, 5], 14);