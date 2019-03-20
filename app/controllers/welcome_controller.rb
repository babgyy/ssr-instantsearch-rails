class WelcomeController < ApplicationController
  def index
    @result = Post.search("dolorem").raw_answer.to_json
  end
end
