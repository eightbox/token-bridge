"use strict";(self["webpackChunkton_token_bridge"]=self["webpackChunkton_token_bridge"]||[]).push([[686],{41686:function(n,t,e){e.r(t),e.d(t,{WalletLink:function(){return r}});var i=e(82482),s=e(19432),h=e(21832),o=e.n(h),c=e(97450),a=e(47688),d=e(15941);class r{constructor(){(0,i.Z)(this,"name","walletLink"),(0,i.Z)(this,"title","WalletLink"),(0,i.Z)(this,"web3",null),(0,i.Z)(this,"myAddress",""),(0,i.Z)(this,"chainId",0),(0,i.Z)(this,"isConnected",!1),(0,i.Z)(this,"provider",null),(0,i.Z)(this,"emitter",void 0),this.emitter=(0,s.i)(),this.onAccountsChanged=this.onAccountsChanged.bind(this),this.onChainChanged=this.onChainChanged.bind(this),this.onDisconnect=this.onDisconnect.bind(this),this.onConnect=this.onConnect.bind(this)}on(n,t){return this.emitter.on(n,t)}async connect(n){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)this.provider=window.ethereum;else{try{await(0,a.iM)("walletLink@2.4.2.js")}catch(e){return d.log(e.message),!1}const t=new window.WalletLinkBundle.default({appName:c.z.appName,appLogoUrl:c.z.appLogoUrl,darkMode:!1});this.provider=t.makeWeb3Provider(n.rpcEndpoint,n.chainId)}try{await this.provider.enable()}catch(i){if(d.log(i.message),"User denied account authorization"===i.message)return d.log(i.message),!1;throw new Error(i.message)}this.web3=new(o())(this.provider);const t=await this.web3.eth.getAccounts();return this.myAddress=t[0],this.chainId=(0,a.DQ)(await this.web3.eth.net.getId()),this.chainId!==n.chainId&&await this.switchChain(n.chainId),this.isConnected=!0,this.provider.on("accountsChanged",this.onAccountsChanged),this.provider.on("chainChanged",this.onChainChanged),this.provider.on("disconnect",this.onDisconnect),this.provider.on("connect",this.onConnect),!0}onAccountsChanged(n){d.log("account changed, old address: ",this.myAddress),n&&n.length?this.myAddress=n[0]:this.myAddress="",d.log("account changed, new address: ",this.myAddress)}onChainChanged(n){d.log("chain changed, old chain: ",this.chainId),this.chainId=(0,a.DQ)(n),d.log("chain changed, new chain: ",this.chainId)}onDisconnect(n,t){this.isConnected=!1,d.log("disconnected"),this.provider.off("accountsChanged",this.onAccountsChanged),this.provider.off("chainChanged",this.onChainChanged),this.provider.off("disconnect",this.onDisconnect),this.provider.off("connect",this.onConnect),this.emitter.emit("disconnect"),this.emitter.events={}}onConnect(){this.isConnected=!0,d.log("connected")}async switchChain(n){try{await this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+n.toString(16)}]})}catch(t){return d.log(t.message),!1}return!0}disconnect(){this.provider.close()}}},19432:function(n,t,e){e.d(t,{i:function(){return i}});let i=()=>({events:{},emit(n,...t){let e=this.events[n]||[];for(let i=0,s=e.length;i<s;i++)e[i](...t)},on(n,t){return this.events[n]?.push(t)||(this.events[n]=[t]),()=>{this.events[n]=this.events[n]?.filter((n=>t!==n))}}})}}]);
//# sourceMappingURL=686.5f521528.js.map