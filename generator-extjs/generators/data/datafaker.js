'use strict';
var faker = require('faker');
var chalk = require('chalk');
faker.locale = "es";
/**
 * Atendiendo al tipo y metodo llama a un api de FakerJs https://github.com/marak/Faker.js/

tipos extjs
auto (Default, implies no conversion)
string
int
float
boolean
date

 */

function randomFloatBetween(minValue, maxValue, precision) {
    chalk.red('EN datafaker randomFloatBetween');
  if (typeof(precision) == 'undefined') {
    precision = 2;
  }
  return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
};

/**
si no tengo metodo se aplica uno por defecto
'boolean': random.boolean,
'date': date.recent
int:      random.number
float:   randomFloatBetween(0,100000,2)
auto
string lorem.sentence
*/
function defaultMethod(extDataType) {
  var extjsDT = {
    'boolean': 'random.boolean',
    'date': 'today',
    'int': 'random.number',
    'float': 'randomFloat',
    'auto': '',
    'string': 'lorem.sentence'
  };
  return extjsDT[extDataType];
};

function randomFloat() {
  chalk.red('EN datafaker randomFloat');
  return randomFloatBetween(0, 100000, 3)
};
function today() {
  chalk.red('EN datafaker today');
  return new Date();
};

function getFakeData(type, method) {
  var fake = "",
    inputId = [type, method || ''].join('_');
  method = method || defaultMethod(type);

  console.log('EN datafaker:' + type + ' y ' + method);
  //console.log(', inputId:' + inputId);

  var focusMethod = {
    'boolean': faker.random.boolean,
    'today': today,
    'randomFloat': randomFloat,
    //metodos puros faker
    'commerce.color': faker.commerce.color,
    'commerce.department': faker.commerce.department,
    'commerce.productName': faker.commerce.productName,
    'commerce.price': faker.commerce.price,
    'commerce.productAdjective': faker.commerce.productAdjective,
    'commerce.productMaterial': faker.commerce.productMaterial,
    'commerce.product': faker.commerce.product,
    'company.suffixes': faker.company.suffixes,
    'company.companyName': faker.company.companyName,
    'company.companySuffix': faker.company.companySuffix,
    'company.catchPhrase': faker.company.catchPhrase,
    'company.bs': faker.company.bs,
    'company.catchPhraseAdjective': faker.company.catchPhraseAdjective,
    'company.catchPhraseDescriptor': faker.company.catchPhraseDescriptor,
    'company.catchPhraseNoun': faker.company.catchPhraseNoun,
    'company.bsAdjective': faker.company.bsAdjective,
    'company.bsBuzz': faker.company.bsBuzz,
    'company.bsNoun': faker.company.bsNoun,
    'date.past': faker.date.past,
    'date.future': faker.date.future,
    'date.between': faker.date.between,
    'date.recent': faker.date.recent,
    'date.month': faker.date.month,
    'date.weekday': faker.date.weekday,
    'finance.account': faker.finance.account,
    'finance.accountName': faker.finance.accountName,
    'finance.mask': faker.finance.mask,
    'finance.amount': faker.finance.amount,
    'finance.transactionType': faker.finance.transactionType,
    'finance.currencyCode': faker.finance.currencyCode,
    'finance.currencyName': faker.finance.currencyName,
    'finance.currencySymbol': faker.finance.currencySymbol,
    'hacker.abbreviation': faker.hacker.abbreviation,
    'hacker.adjective': faker.hacker.adjective,
    'hacker.noun': faker.hacker.noun,
    'hacker.verb': faker.hacker.verb,
    'hacker.ingverb': faker.hacker.ingverb,
    'hacker.phrase': faker.hacker.phrase,
    'image.image': faker.image.image,
    'image.avatar': faker.image.avatar,
    'image.imageUrl': faker.image.imageUrl,
    'image.abstract': faker.image.abstract,
    'image.animals': faker.image.animals,
    'image.business': faker.image.business,
    'image.cats': faker.image.cats,
    'image.city': faker.image.city,
    'image.food': faker.image.food,
    'image.nightlife': faker.image.nightlife,
    'image.fashion': faker.image.fashion,
    'image.people': faker.image.people,
    'image.nature': faker.image.nature,
    'image.sports': faker.image.sports,
    'image.technics': faker.image.technics,
    'image.transport': faker.image.transport,
    'internet.avatar': faker.internet.avatar,
    'internet.email': faker.internet.email,
    'internet.userName': faker.internet.userName,
    'internet.protocol': faker.internet.protocol,
    'internet.url': faker.internet.url,
    'internet.domainName': faker.internet.domainName,
    'internet.domainSuffix': faker.internet.domainSuffix,
    'internet.domainWord': faker.internet.domainWord,
    'internet.ip': faker.internet.ip,
    'internet.userAgent': faker.internet.userAgent,
    'internet.color': faker.internet.color,
    'internet.mac': faker.internet.mac,
    'internet.password': faker.internet.password,
    'lorem.words': faker.lorem.words,
    'lorem.sentence': faker.lorem.sentence,
    'lorem.sentences': faker.lorem.sentences,
    'lorem.paragraph': faker.lorem.paragraph,
    'lorem.paragraphs': faker.lorem.paragraphs,
    'name.firstName': faker.name.firstName,
    'name.lastName': faker.name.lastName,
    'name.findName': faker.name.findName,
    'name.jobTitle': faker.name.jobTitle,
    'name.prefix': faker.name.prefix,
    'name.suffix': faker.name.suffix,
    'name.title': faker.name.title,
    'name.jobDescriptor': faker.name.jobDescriptor,
    'name.jobArea': faker.name.jobArea,
    'name.jobType': faker.name.jobType,
    'phone.phoneNumber': faker.phone.phoneNumber,
    'phone.phoneNumberFormat': faker.phone.phoneNumberFormat,
    'phone.phoneFormats': faker.phone.phoneFormats,
    'random.number': faker.random.number,
    'random.arrayElement': faker.random.arrayElement,
    'random.objectElement': faker.random.objectElement,
    'random.uuid': faker.random.uuid,
    'random.boolean': faker.random.boolean
  };

  if (focusMethod[method]) {
    fake = focusMethod[method]();
  } else {
    console.log(chalk.bold.red('ERROR, metodo %s not found'), method);
  }

  return fake;
}

module.exports = {
  get: getFakeData
};
