import React, { useContext } from "react";
import { compose } from 'redux';
import { FusionContext, useService } from 'fusion-react';
import { RPCToken } from 'fusion-plugin-rpc';

function RpcComponent(props) {
	const { render } = props;
	const ctx = useContext(FusionContext);
	const rpc = useService(RPCToken).from(ctx);

	return render({ rpc });
};

const RcpContainer = compose()(RpcComponent);

export default function withRpc(Component) {
	return function WithRpc(props) {
		return <RcpContainer
			render={renderProps => <Component {...props} {...renderProps} />}
		/>;
	};
}
