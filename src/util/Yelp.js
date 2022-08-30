const apiKey = 'OOVjq_9jXmsD-jYB78I2NiKFrtxHQeDY-GRY8M5lrJB8jjtCA5JQd1aeGcTbBXeS9MUpwN7APZ3vHvvPQzcznKQE5OD16DMULRsR9RqEMCtTgil0OvGae4wNR4wNY3Yx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
              }
        } )
        .then((response)=> {
            return response.json()
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            } else {

            }
        });
    }
}

export default Yelp;