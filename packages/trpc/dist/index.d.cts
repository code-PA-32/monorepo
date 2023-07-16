import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import * as _trpc_server from '@trpc/server';

declare function createContext({ req, res }: CreateFastifyContextOptions): {
    req: FastifyRequest;
    res: FastifyReply;
};

declare const exampleRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: object;
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
}>, {
    hello: _trpc_server.BuildProcedure<"query", {
        _config: _trpc_server.RootConfig<{
            ctx: object;
            meta: object;
            errorShape: _trpc_server.DefaultErrorShape;
            transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            text: string;
        };
        _input_out: {
            text: string;
        };
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
    }, {
        greeting: string;
    }>;
    getData: _trpc_server.BuildProcedure<"query", {
        _config: _trpc_server.RootConfig<{
            ctx: object;
            meta: object;
            errorShape: _trpc_server.DefaultErrorShape;
            transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _ctx_out: object;
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
    }, ({
        quotes: any;
        author: any;
        category: any;
    } | {
        quotes: any;
        author: any;
        category: any;
    } | {
        quotes: any;
        author: any;
        category: any;
    } | {
        quotes: any;
        author: any;
        category: any;
    })[]>;
}>;

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: object;
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
}>, {
    example: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        hello: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                text: string;
            };
            _input_out: {
                text: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            greeting: string;
        }>;
        getData: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: object;
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, ({
            quotes: any;
            author: any;
            category: any;
        } | {
            quotes: any;
            author: any;
            category: any;
        } | {
            quotes: any;
            author: any;
            category: any;
        } | {
            quotes: any;
            author: any;
            category: any;
        })[]>;
    }>;
}>;
type AppRouter = typeof appRouter;

export { AppRouter, appRouter, createContext, exampleRouter };
