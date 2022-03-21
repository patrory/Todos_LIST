#include<bits/stdc++.h>
using namespace std;
using ll = long long;
inline int add1(ll a,ll b){
	return (abs(a-b)==0?0:1);
}
int main(){
	int test;
	cin>>test;
	while(test--){
		ll a,b,c;
		cin>>a>>b>>c;
		if( floor((a+b)/(2*b*1.0))  == ceil( (a+b)/(2*b*1.0) )    )cout<<"YES"<<endl;
		else if (    floor( (2*b-a)/(c*1.0)) == ceil( (2*b-a)/(c*1.0))  )cout<<"YES"<<endl;
		else if ( floor( (2*b-c)/(a*1.0)) == ceil( (2*b-c)/(a*1.0)) )  cout<<"YES"<<endl;
		else cout<<"NO"<<endl;
	}
return 0 ;
}