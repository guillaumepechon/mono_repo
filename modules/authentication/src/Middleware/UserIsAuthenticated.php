<?php

namespace AOSForceMonoRepo\Authentication\Middleware;

use AOSForceMonoRepo\Authentication\Facades\Constants;
use App\Models\User;
use Closure;

class UserIsAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = null;

        if (isset($_COOKIE['access_token'])) {
            try {
                $user = auth()->setToken($_COOKIE['access_token'])->user();
                dd(User::first());
            } catch (\Exception $ex) {
                dd($ex->getMessage());
                return $this->redirect($request);
            }
        }

        if ($user) {
            $user->refreshAccessToken();

            return $next($request);
        }

        dd('fail');

        return $this->redirect($request);
    }

    /**
     * Redirect the user to login page or give him a 999 JSON code.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    protected function redirect($request)
    {
        User::setAccessTokenCookie(null, -1);

        if ($request->expectsJson()) {
            return response()->json(['error' => Constants::DISCONNECTED]);
        }

        return redirect('/');
    }
}
