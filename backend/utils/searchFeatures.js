class searchFeatures {
    constructor(query,queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i", //case insensitve
            }
        }:{};

        this.query = this.query.find({ ...keyword });
        return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr }

        // fields to remove for category
        const removeFields = ["keyword", "page", "limit"];

        // console.log(queryCopy);
        removeFields.forEach(key => delete queryCopy[key]);
        // console.log(queryCopy);

        // price filter
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        // console.log(JSON.parse(queryStr));

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skipProducts = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skipProducts);
        return this;
    }

}

module.exports = searchFeatures;