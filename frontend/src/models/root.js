import React, {useEffect} from 'react';
import {Registerable} from '@liaison/liaison';
import {view} from '@liaison/react-integration';

export class Root extends Registerable() {
  @view() static Main() {
    const {app, router, common} = this.$layer;

    useEffect(() => {
      document.title = app.name;
    }, [app.name]);

    const routerIsReady = router.use();

    if (!routerIsReady) {
      return null;
    }

    const content = router.callCurrentRoute({fallback: common.RouteNotFound});

    return (
      <div>
        <app.Header />
        {content}
      </div>
    );
  }
}
