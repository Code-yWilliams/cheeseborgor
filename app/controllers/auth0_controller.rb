class Auth0Controller < ApplicationController
  def callback
    auth_info = request.env["omniauth.auth"]
    session[:userinfo] = auth_info["extra"]["raw_info"]

    user = User.find_or_initialize_by(email: session[:userinfo]["email"])
    if user.new_record?
      user.name = session[:userinfo]["name"]
    end
    user.save!

    redirect_to root_path
  end

  def failure
    @error_msg = request.params["message"]
    redirect_to "/public_index"
  end

  def logout
    reset_session
    redirect_to logout_url, allow_other_host: true
  end

  private

  def logout_url
    request_params = {
      returnTo: root_url,
      client_id: AUTH0_CONFIG["auth0_client_id"]
    }

    URI::HTTPS.build(host: AUTH0_CONFIG["auth0_domain"], path: "/v2/logout", query: request_params.to_query).to_s
  end
end
