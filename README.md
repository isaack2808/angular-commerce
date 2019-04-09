# Store components

Online store components written in Angular.  

## Store architecture

### Components dependencies
Most of components are separated from each other. The most common dependency is `Data Abstraction Layer (DAL)`.
DAL is a bridge for some connector ( for now Firebase Connector ). DAL contains methods for manipulating with database 
(get products, add products to shopping cart, remove products from shopping cart etc.), auth api (register user, login, logout etc.).

### Querying to database
As we started to use firebase for database, auth, storage, it was a question how to process heavy queries with aggregations, multiple conditions etc. [Firebase Realtime Databese api](https://firebase.google.com/docs/database/) was very simple for our requirentments.  
After some time of research we stayed at `ElasticSearch`.
It's fast, allow to make heavy hard queries and Firebase team wrote an adapted to firebase called [Firebase Flashlight](https://github.com/firebase/flashlight).  
For example, queries in `Product Service` are written like `ElasticSearch queries`. 

### Organization of products
About products organization you can read in docs for services, for example, `Product service` or `Basket service`.

### Creating other connectors 
If you want to create you own connector you must adopt it to `ElasticSearch flashlight` output.

### For Developers working for equity for ArtistsTradingCard.com Inc. please see full disclosure under Investor Relations on website.  Please email welcome.aboard@artiststradingcard.com   Attn:  software dev interest -Please include this in subject line to make sure email is forwarded to Isaac.


### To Do

-Products are the cards that exist on artiststradingcard.com are first uploaded and minted in artists-detail(profile) page.

-Add Routing - Register/Login==>Artists-detail==>add-cards==>browse=products==>add-products-to-basket==>Checkout         

- Set database schema                                --Please see dal

- Fix index in root to start routing in register.component     





```


