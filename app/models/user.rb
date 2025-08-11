class User < ApplicationRecord
  validates_uniqueness_of :username, :email, case_sensitive: false, message: "username has already been taken"

  def setup_complete?
    username.present?
  end
end
