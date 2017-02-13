/**
 * 基于jquery,underscore bootstrap 的消息提示插件
 * @param  {Object} $ 
 * @param  {Object} _ 
 * @return {Object} notify  
 */
;(function($,_){
	var notify = null,
	    root = this,
	    _notify = root.notify;

	    _notify && (root._notify = _notify);

	    notify = new Object();
	    root.notify = notify;

	    notify.show =  function (){

	    }

	    function messgaeBody (){

	    }

	    messgaeBody.prototype = {
	    	constructor:messgaeBody,
	    	show:function(){
	    		//
	    	},
	    	hide:function(){
	    		//
	    	},
	    	destroy:function(){
	    		//
	    	}

	    }



})(jQuery,_);