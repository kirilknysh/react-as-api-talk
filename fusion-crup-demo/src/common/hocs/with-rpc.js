import React, { useContext } from "react";
import { compose } from 'redux';
import { FusionContext, useService } from 'fusion-react';
import { RPCToken } from 'fusion-plugin-rpc';

function getRpc() {
	const ctx = useContext(FusionContext);

	return useService(RPCToken).from(ctx);
}

function RpcComponent(props) {
	const { render } = props;

	return render({ rpc: getRpc() });
};

const RcpContainer = compose()(RpcComponent);

export default function withRpc(Component) {
	return function WithRpc(props) {
		return <RcpContainer
			render={renderProps => <Component {...props} {...renderProps} />}
		/>
	};
}
