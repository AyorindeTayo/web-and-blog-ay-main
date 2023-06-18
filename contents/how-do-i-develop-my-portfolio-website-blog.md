---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2023-06-12T16:55:12.000+00:00
tags:
  - Python 
  - Data Science 
  - price Elasticity 
  - Data Visualization 
  - Blog
author: Ayo Olanipekun
type: article
coverImage: https://res.cloudinary.com/dsysj2hdo/image/upload/v1686562405/images_m2dyvh.png
coverImageAlt: Macbook at a cafe
title: Price Elasticity of Demand with Python Analysis
description:
  My experience about developing my first portfolio website and a blog
  using NextJS and a headless CMS.
excerpt:
  price elasticity of demand will be introduced, and how it is applied by marketers to track customer behavior and obtain the necessary insights. A use case will be considered using publicly available data for price elasticity of demand data analysis
slug: Price elasticity of demand 
featured: true
category: Data Science 
language: English
---



# Price Elasticity of Demand with Python Analysis


## Introduction
Changes in the prices of goods are easily noticeable to everyone whether they are economists or a layman. The price change usually appears to have no pattern or logic. An explanation for this is found in one of the most crucial economic and marketing concepts: price elasticity.
In this article, price elasticity of demand will be introduced, and how it is applied by marketers to track customer behavior and obtain the necessary insights. A use case will be considered using publicly available data for price elasticity of demand data analysis.
## Price Elasticity of demand
Price elasticity of demand measures the relative percentage change in Quantity of a good and services relative to the percentage change in the price of the goods and services. Price elasticities of demand are always negative since price and quantity demanded always move in opposite directions (on the demand curve). By convention, we always talk about elasticities as positive numbers. Mathematically, we take the absolute value of the result. Elastic demand is one in which the change in quantity demanded due to price changes is large. In other words, An elastic demand curve is one where the quantity demanded of a given good is sensitive to changes in price. Inelastic demand is one in which the change in quantity demanded due to a price change is small. Therefore, Inelastic demand is largely resistant to price fluctuations, therefore whether the price increases or decreases, it won’t impact the demand.

![Imgur](https://imgur.com/mYTCuSu.jpg)

## The equation to calculate the Price Elasticity of Demand
Price Elasticity of Demand=(% Change in the Quantity Demanded(∆Q) )/(% Change in the Price(∆P))
## Applications of Price Elasticity of Demand
The fields of industry, trade, and commerce have greatly benefited from the idea of price elasticity of demand. In addition to enabling an organization to examine economic issues, the price elasticity of demand also aids in the resolution of managerial issues unrelated to pricing choices. Generally, it plays a very important role in the pricing decisions of business firms when regulating prices.

Price elasticity of demand can be used to answer the following questions
1. Product Pricing
The concept of price elasticity of demand assists business firms to decipher if a price drop will increase sales and business revenue.
2. Demand Forecasting
 The value of the elasticity of demand is usually useful in forecasting the commodity’s future demand. Since Economics is not an absolute science, economists must make every effort to estimate the possibility that a particular event will occur. Elasticity can be referred to as the responsiveness of demand to the change in price. Usually, the responsiveness may be great or small. Let’s consider the case of tobacco, even with a big fall in its price, the demand may not increase. A typical example of inelastic demand. While in the case of soft drinks, a slight fall in their price may increase their purchase. The demand, in this case, is said to be elastic. So, given the value of elasticity of demand, future demand forecasting would be easy.
3. Factor Pricing
If the factor input price is elastic, entrepreneurs will usually want to pay a low price while in the case of inelastic price input, entrepreneurs will pay a higher price conveniently without hassle for elastic price input.
4. Measure competitiveness and Complements of different brands
A Business or company’s price elasticity of demand is also a significant predictor of the prevalence of complementary products and services in the market and the level of competition or substitute in the market.
5. Tax formulation policies
The government taxation policy can be based on the elasticity of the products. Low taxes are usually charged on products with high elasticity and high taxes are levied on products with low elasticity. For goods that have high elasticity, the government may decide to protect them with a subsidy policy. This is to help them to compete favorably in the market.
## Price Elasticity of Demand Data Analysis with Python
A linear regression model is built to estimate the price elasticity of demand. I used private datasets.
## Reading the data
A panda DataFrame based on the CSV data was built. The following code shows how the data is stored into a dataframe.

```
df=pd.read_csv('data.csv')
df.head()
```
## Importation of Libraries
Important libraries for the data analysis are imported
```
#load all the libraries...
import pandas as pd
import numpy as np
import re
from IPython.display import display, HTML, Image

import matplotlib.pyplot as plt
import seaborn as sns
import statsmodels.api as sm

import warnings
warnings.filterwarnings("ignore")

sns.set_style("darkgrid")
```
## Data Cleaning
Detect missing value:
Return a boolean object of the same size showing whether the values are NA. NA values, including None or numpy.NaN, gets mapped to True values. Otherwise, everything else gets mapped to False values. Characters such as empty strings ‘ ’ or numpy. inf is not considered NA values unless you set pandas.options.mode.use_inf_as_na =True.
```
df.isna().sum
```
Any missing value in the dataframe is filled by the function below
```
df.fillna(method='ffill', inplace=True)
```
for statistical analysis, we need to install linearmodelslinear models
```
pip install linearmodels
```
Linear (regression) models for Python. Extends statsmodels with Panel regression, instrumental variable estimators, system estimators and models for estimating asset prices.
## Log-Log plot of Regregularice against Volume observations
```
sns.set()
fig_static = plt.figure(figsize = (8,8))
plt.scatter(data['regular_volume'],data['regular_price'], s = 10, c = 'gray')
plt.ylabel('Log of regular_price', fontsize = 15)
plt.xlabel('Log of regular_volume', fontsize = 15)
plt.title('Regular Price and volume Observations', fontsize = 20)
plt.show()
```
![Imgur](https://imgur.com/86J4fer.jpg)
The above Log-Log plot shows the observed volume at every price in a scattered graph. The two Axes display the logarithm values of the two variables. With the logarithm plot, a significant percentage change in price will always correspond with a significant visual move on the logarithmic volume scale.
## Building a linear regression model
Estimating Price Elasticity of Demand (PED), and also using Python’s Statsmodels to estimate our models as well as conduct statistical tests.
Ordinary Least Squares (OLS) Estimation for (regular volume and regular price)
```
ls_model = ols("regular_volume ~ regular_price", data=df).fit()
print(ls_model.summary())
```
![Imgur](https://imgur.com/DcC63so.jpg)

1. t_score: equals to t-stats, which indicates the significance of the findings. The closer is to 0, the more likely there is no significance. The greater the t-stats, whether positive or negative, the greater the significance of the findings
2. coefficient_pvalue: As stated earlier, tests the null hypothesis that the coefficient is equal to zero (no effect). A low p-value (< 0.05) indicates that you can reject the null hypothesis
3. slope (coefficient): is the ratio of the “price change” to the “quantity sold change” between (any) two distinct points on a line
4. price_mean: average price per product
5. quantity_mean: average quantity sold per product
6. intercept: equals the quantity of X when all other variables = 0

## Observations from the statistical modeling
- Low value for R-Squared explains that our model did not show good response variability
- The small P-value shows that we can disregard the null hypothesis that price has no effect on Quantity sold, which means price have some appreciable effect on Quantity sold for the reqular quantity

## Regression Plot
```
fig = plt.figure(figsize=(12, 8))
fig = sm.graphics.plot_ccpr_grid(ls_model, fig=fig)
```
![Imgur](https://imgur.com/a34JHfD.jpg)
The trend indicates that the predictor variables (Price) provide information about the response (Quantity sold at regular price), and some of the data points fall further from the regression line and some are close to the regression line, and the predictions are not very precise.
## Price Elasticity of demand calculation using Python
Price elasticity of demand measures the relative percentage change in Quantity of a good and service in relative to the percentage change in the price of the goods and services.
```
df_demand_schedule= pd.DataFrame(data=df)
df_demand_schedule
```
```
df_demand_schedule['Price_Elasticity_of_Demand for regular']=(df_demand_schedule.regular_volume.pct_change() / df_demand_schedule.regular_price.pct_change())
df_demand_schedule
```
![Imgur](https://imgur.com/FMWYO9U.jpg)
- If the price elasticity of demand is greater than 1 it is elastic, then the company should cut the price, because the percentage drop in price will result in a larger percentage increase in the quantity sold.
- If the price elasticity of demand is lesser than 1 it is inelastic
For more details on the above python code. Kindly check the link to my google colab below
[Link text Here](https://colab.research.google.com/github/AyorindeTayo/Price-Elasticity-of-Demand-Prediction/blob/main/Untitled64.ipynb#scrollTo=EDMDPcIroM83&line=1&uniqifier=1)

## How we help companies to implement Price elasticity of demand in driving their Business growth
- Analyze and determine the best prices to maximize profits
- Providing dynamic pricing input
- Help business to optimize discounts and marketing campaigns

We can calculate empirical price elasticity for different products based on sales history. A large number of parameters will be taken into consideration for this purpose.
You can reach out if you will need my consultation on this.

# References :
- https://towardsdatascience.com/calculating-price-elasticity-of-demand-statistical-modeling-with-python-6adb2fa7824d
- https://www.absolutdata.com/blog/understanding-price-elasticity-product-pricing-is-more-than-just-a-number-absolutdata/
- https://premoneo.com/en/2020/10/20/price-elasticity/