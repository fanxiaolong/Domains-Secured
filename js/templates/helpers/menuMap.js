/** * Created by fanxiaolong on 2015/9/9. */define(['hbs/handlebars'], function ( Handlebars ) {    var map = {        '1': ['域名管理','domain'],        '5': ['会员管理','vip'],        '8': ['运营管理','business'],        '18': ['TLD配置管理','setting'],        '23': ['系统管理','setting'],    }    function menuMap ( context, param, options ) {        if(typeof param === 'string' && param === 'name' ){            return map[context][0]        }        if(typeof param === 'string' && param === 'class' ){            return map[context][1]        }    }    Handlebars.registerHelper( 'menuMap', menuMap );    return menuMap;});